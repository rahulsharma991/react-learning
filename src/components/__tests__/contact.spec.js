import Contact from '../Contact';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
//grouping test cases with describe
describe('contact us test cases', () => {
    test('testing contact component', () => {
        render(<Contact />);
        const heading = screen.getByRole('heading');
        //Assertion is important to write
        expect(heading).toBeInTheDocument();
    });

    it('test case 2' , () => {
        render(<Contact />);
        const input = screen.getAllByRole('textbox');

        expect(input.length).toBe(1);
    })
})
