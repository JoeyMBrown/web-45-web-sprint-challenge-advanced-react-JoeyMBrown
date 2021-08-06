# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

    Stateful components control their own state, have access to lifecycle functions, and are written slightly differently than functional components.  Functional
    components need to import hooks to be able to use them.  They use hooks to control state, and can use hooks to gain access to lifecycle functions.

2. When does a componentWillMount function be called? What about a componentWillUpdate?

    ComponentWillMount is called just before a component is mounted (or rendered on the screen).  ComponentWillUpdate is called just before a component is re-rendered,
    or just before an update to state takes place.

3. Define stateful logic.

    stateful logic is any logic that uses state.

4. What are the three step of creating a successful test? What is done in each phase?

    Arrange, Act, Assert.  The arrange phase is used to render the component you will be testing.  Act is provding user interaction in the form of tests.  Assert, is defining what you would expect to happen because of the previously specified user interactions.
