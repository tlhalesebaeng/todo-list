import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App.jsx';
import userEvent from '@testing-library/user-event';
import { TaskContextProvider } from './store/tasks-context.jsx';

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

    it('adds the task on add button click', async () => {
        // render the app with the provider
        render(
            <TaskContextProvider>
                <App />
            </TaskContextProvider>
        );

        // get the input field element and fill it with a title
        const titleInputElement = screen.getByPlaceholderText(/task title/i);
        await userEvent.type(titleInputElement, 'test name');

        // get the button to be clicked and click it
        const addButtonElement = screen.getByRole('button', { name: '+' });
        await userEvent.click(addButtonElement);

        // get the newly added task
        const taskElement = screen.getByText(/test name/i);

        // check if a task with the filled with test name is in the document
        expect(taskElement).toBeInTheDocument();
    });
});
