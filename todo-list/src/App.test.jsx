import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App.jsx';

describe('App', () => {
    it('renders "To Do List" title', () => {
        render(<App />);
        const titleElement = screen.getByText(/to do list/i);
        expect(titleElement).toBeInTheDocument();
    });

    it('renders task input field', () => {
        render(<App />);
        const titleInputElement = screen.getByPlaceholderText(/task title/i);
        expect(titleInputElement).toBeInTheDocument();
    });

    it('renders add button', () => {
        render(<App />);
        const addButtonElement = screen.getByRole('button', { name: '+' });
        expect(addButtonElement).toBeInTheDocument();
    });

    // it('adds the task on add button click', () => {});
});
