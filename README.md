Day 1: 0:00:00 - 1:06:32 (2 hours 47 minutes of study)

Today, im gonna learn all the basic things about Cypress and write all the important information here.

The link of video that i'm using is listed:
https://www.youtube.com/watch?v=u8vMu7viCm8 (Testing JavaScript with Cypress – Full Course)

Okay, it actually took me an hour just to set up things right.
IDK what the error is, it has something to do with package-lock.json.
If you guys encounter the same error while doing this practice, try updating your node.js version. Or idk, just open this link:
https://stackoverflow.com/questions/64813775/is-there-any-way-to-fix-package-lock-json-lockfileversion-so-npm-uses-a-specific

Okay now, lets actually start studying

Fundamentals:

1. Describe Blocks:

- Test will exist in a describe block
- The describe block take 2 argument
- First = Description (String) Which will describing your test file
- Second = Callback function in which you are going to have your actual test

2. It Blocks:

- Within describe blocks, we have It Blocks
- It blocks = single test within an overall test file
- The way to use it block is similar to describe block
- First arg = Title of an individual test
- Second arg = Callback function containing your test code

3. Commands & Interacting with elements

- Cypress have various commands to help testing
- The command can be used in the **cy** object
- For example you can use cy.visit('/') to access the baseurl of your site

List of command:

- cy.visit()
- cy.click()
- cy.type()
- cy.check()
- ETC

One of the most important crucial Cypress concepts that you need to understand is **Cypress handles things asynchronously**.
Cypress commands do not return their subjects. From what i understand??? I understand nothing right now xdd.
Assigning a variable is not recommended. Cypress commands yield their subjects.

Using .then() to interact with subject directly. .then() behaves similarly to promises in JS.

4. Gettings elements

- We of course often need to get an element from the DOM and make an assertion. For example, an h1 element contains certain text which you can get by using get function and pass in a CSS query selector

5. Command chaining & Assertions

- After getting an element, we probably want to do something with that element for example making an assertion.
- You can do this by chaining on an assertion after getting an element
- Example: get(h1).contains('text')

6. Focus on a single test

- Use it.only() to run only a single test

7. beforeEach()

- within the testing box, we can also use a beforeEach command to perform certain action prior to every test

8. Custom commands

- We aren't limited to only using cy.X commands
- We can create our own custom commands to cypress/support/commands.ts
- For example we can add a custom command getData to get an element by data-test

What i learn:

- You don't want to write test that rely on something like css class that change a lot (To make it not flaky). Meaning if something changed a little bit, you dont want the code to break on something not trivial at all. you want to use most of the time data-test.
- npx cypress open = to open cypress app
- npm run dev = to start app

So today i have learned enough to understand the fundamentals of cypress, next, i will be finishing all the video and learn detox for the next one. Talking about detoxxxx...... Okay i have not been detoxing for a while but i guess its gonna be fine. I will be more responsible and actually study a lot. See you guys tomorrow

Day 2: 1:06:32 - 2:39:32 (2 hours 30 minute of study)

So today, i will try my best to finish the cypress tutorial. After i finish this thing, the next thing to do is simply finishing all of my homework and the day is done. Lets start.

What i learn today:

- Retry-ability is important
- use Alias (.as()) if there is a lot of repetition within a test and use .get(@'alias_name') to use the alias again
- if i want to find a text within a page, just use .contains() ??????
- We can easily write test across page. We can also assert our path location
- Cypress provides different ways of working with network request. One way is by using intercepts

Useful method:

- its() can return what index or an object

Component Testing:

- Cypress allow us to test individual component of your app via component test
- Cypress component testing use the same test runner, commands, and API to test components instead of pages
- The main difference is that it uses a development server instead of rendering within a complete website. This result in faster tests and fewer dependencies on infrastructure than e2e tests covering the same code paths
- For additional configuration, it might be needed to configured. But cypress is gg so normally it detects things for you
- Instead of visiting, we are just going to mount component using cy.mount(). And you can just interact and make assertions as you would in E2E test.

Best Practices (Recommended by Cypress):

1. Test unhappy paths: Make sure to test how the user might use your app maliciously or actions that might not be common
2. Use stable selectors: Use data-\* attributes to provide context to your selectors and isolate them from CSS or JS changes. Don't target element based on CSS attributes, Dont target elements that may change their textContent, and Don't use generic selector. And don't couple it to styles
3. Do not assign return values
4. Do not test external websites
5. Keep your test independent. Dont make test dependent to each other.
6. Do not worry about writing tiny test
7. Clean up state before tests run
8. Don't use arbitary cy.wait() instead use route alias

---

Okay thats all for cypress. I understand how the basics work, if i dont understand something i can just google it, as simple as that. I think all the fundamentals and basics is okay now. I should do my homework and learn about detox next. I think detox will be harder but who knows right? Everything will be easy once i understand. Okay to be honest testing is not fun, but something fun about it is, You only need to do it once and once its completed, you will get this sense of accomplishment seeing all green in your test. Okay see you next time. Bye.

---

Hello again, its just an update. I don't find a really good video that teaches about detox testing. But i see some similarity like using describe and it block. So today im going to review more about cypress first so it will still be fresh in my memory.
