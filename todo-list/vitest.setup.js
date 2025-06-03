import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

// this will automatically unmount react trees after each test
afterEach(() => {
    cleanup();
});
