import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Task from './Task';
import userEvent from '@testing-library/user-event';

describe('Task', () => {
    it('renders checkbox initially', () => {
        // Arrange (prepare test data or environment)
        render(<Task task={{}} />);

        // Assert (compare the test data and the expected results)
        const checkBoxElement = screen.getByRole('checkbox', {
            name: 'task-checkbox',
        });
        expect(checkBoxElement).toBeInTheDocument();
    });

    it('renders delete image initially', () => {
        render(<Task task={{}} />);
        const imageElement = screen.getByRole('img', { name: 'delete' });
        expect(imageElement).toBeInTheDocument();
    });

    it('renders title', () => {
        const testTask = { id: 'randomid1', title: 'test title' };
        render(<Task task={testTask} />);

        const titleElement = screen.getByText(/test title/i);
        expect(titleElement).toBeInTheDocument();
    });

    it('removes the delete img on checkbox initial click', async () => {
        // Arrange
        render(<Task task={{}} />);

        // Act (run logic that should be tested)
        const checkBoxElement = screen.getByRole('checkbox', {
            name: 'task-checkbox',
        });
        await userEvent.click(checkBoxElement);

        // Assert
        const imageElement = screen.queryByRole('img', { name: 'delete' });
        expect(imageElement).toBeNull();
    });

    it('adds the delete img on checkbox double click', async () => {
        render(<Task task={{}} />);

        const checkBoxElement = screen.getByRole('checkbox', {
            name: 'task-checkbox',
        });

        // show the delete image
        await userEvent.dblClick(checkBoxElement);
        const shownImage = screen.getByRole('img', { name: 'delete' });
        expect(shownImage).toBeInTheDocument();
    });
});
