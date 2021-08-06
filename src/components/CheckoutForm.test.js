import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";
import MutationObserver from 'mutationobserver-shim';

// Write up the two tests here and make sure they are testing what the title shows

test('Sanity test, CheckoutForm renders without errors', () => {
    render(<CheckoutForm />)
})

test("form header renders", () => {
    render(<CheckoutForm />)

    const header = screen.getByText(/checkout form/i);
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm />)

    const name = 'Joey';
    const lastName = 'Brown';
    const address = 'random-address';
    const city = "Tiffin";
    const state = "Ohio";
    const zip = '44883';

    const firstNameInput = screen.getByLabelText(/First Name:/i);
    userEvent.type(firstNameInput, name);

    const lastNameInput = screen.getByLabelText(/Last Name:/i);
    userEvent.type(lastNameInput, lastName);

    const addressInput = screen.getByLabelText(/Address:/i);
    userEvent.type(addressInput, address);

    const cityInput = screen.getByLabelText(/City:/i);
    userEvent.type(cityInput, city);

    const stateInput = screen.getByLabelText(/State:/i);
    userEvent.type(stateInput, state);

    const zipInput = screen.getByLabelText(/Zip:/i);
    userEvent.type(zipInput, zip);

    const submitBtn = screen.getByRole('button');
    userEvent.click(submitBtn);

    await waitFor(() => {
        const successMessage = screen.queryByTestId(/successMessage/i);
        const submittedName = screen.getByText(name, {exact:false}); //White space added is causing these to fail as it's looking for an exact match.  Added exact: false to partial match them
        const submittedLastName = screen.getByText(lastName, {exact:false});
        const submittedAdress = screen.getByText(address);
        const submittedCity = screen.getByText(city, {exact:false});
        const submittedState = screen.getByText(state, {exact:false});
        const submittedZip = screen.getByText(zip, {exact:false});
    
        expect(successMessage).toBeInTheDocument();
        expect(submittedName).toBeInTheDocument();
        expect(submittedLastName).toBeInTheDocument();
        expect(submittedCity).toBeInTheDocument();
        expect(submittedAdress).toBeInTheDocument();
        expect(submittedState).toBeInTheDocument();
        expect(submittedZip).toBeInTheDocument();
    })

});
