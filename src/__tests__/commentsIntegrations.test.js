import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';

import Root from 'Root';
import App from 'components/App';

describe('comments integration', () => {
  beforeEach(() => {
    moxios.install();
    moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
      status: 200,
      response: [
        {
          name: 'name 1',
        },
        {
          name: 'name 2',
        },
      ],
    });
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('can fetch a list of comments and display them', done => {
    // Render entire App
    const wrapped = mount(
      <Root>
        <App />
      </Root>,
    );

    // find the 'fetchComments' button and click it
    wrapped.find('.fetch-comments').simulate('click');

    // wait for moxios to resolve
    moxios.wait(() => {
      wrapped.update();

      // Expect to find a list of comments
      expect(wrapped.find('li').length).toEqual(2);

      // with done, jest will wait to resolve until we call done
      done();

      wrapped.unmount();
    });
  });
});
