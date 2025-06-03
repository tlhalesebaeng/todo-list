import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

// this will automatically unmount react trees after each test
afterEach(() => {
    cleanup();
});
