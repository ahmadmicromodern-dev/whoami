/**
 * Custom React Hook for API calls
 * هوک سفارشی React برای فراخوانی‌های API
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import apiService from '../services/apiService.js';

/**
 * Hook for making API requests with loading, error, and data states
 */
export const useApi = (initialData = null) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const abortControllerRef = useRef(null);

  const execute = useCallback(async (apiCall) => {
    // Cancel previous request if exists
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    // Create new abort controller
    abortControllerRef.current = new AbortController();

    setLoading(true);
    setError(null);

    try {
      const result = await apiCall(abortControllerRef.current.signal);
      setData(result);
      return result;
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError(err.message);
        throw err;
      }
    } finally {
      setLoading(false);
    }
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  const reset = useCallback(() => {
    setData(initialData);
    setError(null);
    setLoading(false);
  }, [initialData]);

  return {
    data,
    loading,
    error,
    execute,
    reset,
  };
};

/**
 * Hook for GET requests
 */
export const useGet = (endpoint, params = {}, options = {}) => {
  const { data, loading, error, execute, reset } = useApi();

  const fetchData = useCallback(async (customParams = {}, customOptions = {}) => {
    const mergedParams = { ...params, ...customParams };
    const mergedOptions = { ...options, ...customOptions };
    
    return execute((signal) => 
      apiService.get(endpoint, mergedParams, { ...mergedOptions, signal })
    );
  }, [endpoint, params, options, execute]);

  // Auto-fetch on mount if enabled
  useEffect(() => {
    if (options.autoFetch !== false) {
      fetchData();
    }
  }, [fetchData, options.autoFetch]);

  return {
    data,
    loading,
    error,
    refetch: fetchData,
    reset,
  };
};

/**
 * Hook for POST requests
 */
export const usePost = (endpoint, options = {}) => {
  const { data, loading, error, execute, reset } = useApi();

  const postData = useCallback(async (postData, customOptions = {}) => {
    const mergedOptions = { ...options, ...customOptions };
    
    return execute((signal) => 
      apiService.post(endpoint, postData, { ...mergedOptions, signal })
    );
  }, [endpoint, options, execute]);

  return {
    data,
    loading,
    error,
    post: postData,
    reset,
  };
};

/**
 * Hook for PUT requests
 */
export const usePut = (endpoint, options = {}) => {
  const { data, loading, error, execute, reset } = useApi();

  const putData = useCallback(async (putData, customOptions = {}) => {
    const mergedOptions = { ...options, ...customOptions };
    
    return execute((signal) => 
      apiService.put(endpoint, putData, { ...mergedOptions, signal })
    );
  }, [endpoint, options, execute]);

  return {
    data,
    loading,
    error,
    put: putData,
    reset,
  };
};

/**
 * Hook for DELETE requests
 */
export const useDelete = (endpoint, options = {}) => {
  const { data, loading, error, execute, reset } = useApi();

  const deleteData = useCallback(async (customOptions = {}) => {
    const mergedOptions = { ...options, ...customOptions };
    
    return execute((signal) => 
      apiService.delete(endpoint, { ...mergedOptions, signal })
    );
  }, [endpoint, options, execute]);

  return {
    data,
    loading,
    error,
    delete: deleteData,
    reset,
  };
};

/**
 * Hook for file uploads
 */
export const useFileUpload = (endpoint, options = {}) => {
  const { data, loading, error, execute, reset } = useApi();

  const uploadFile = useCallback(async (file, additionalData = {}, customOptions = {}) => {
    const mergedOptions = { ...options, ...customOptions };
    
    return execute((signal) => 
      apiService.uploadFile(endpoint, file, additionalData, { ...mergedOptions, signal })
    );
  }, [endpoint, options, execute]);

  return {
    data,
    loading,
    error,
    upload: uploadFile,
    reset,
  };
};

/**
 * Hook for multiple API calls
 */
export const useMultipleApi = () => {
  const [results, setResults] = useState({});
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const executeMultiple = useCallback(async (apiCalls) => {
    setLoading(true);
    setErrors({});

    try {
      const promises = Object.keys(apiCalls).map(async (key) => {
        try {
          const result = await apiCalls[key]();
          return { key, result, error: null };
        } catch (error) {
          return { key, result: null, error: error.message };
        }
      });

      const responses = await Promise.all(promises);
      
      const newResults = {};
      const newErrors = {};

      responses.forEach(({ key, result, error }) => {
        if (error) {
          newErrors[key] = error;
        } else {
          newResults[key] = result;
        }
      });

      setResults(newResults);
      setErrors(newErrors);
      
      return { results: newResults, errors: newErrors };
    } finally {
      setLoading(false);
    }
  }, []);

  const reset = useCallback(() => {
    setResults({});
    setErrors({});
    setLoading(false);
  }, []);

  return {
    results,
    loading,
    errors,
    execute: executeMultiple,
    reset,
  };
};

export default {
  useApi,
  useGet,
  usePost,
  usePut,
  useDelete,
  useFileUpload,
  useMultipleApi,
};
