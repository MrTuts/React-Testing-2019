import React from 'react';
import { mount } from 'enzyme';

import CommentList from 'components/CommentList';
import Root from 'Root';

describe('<CommentList />', () => {
  let wrapped;

  beforeEach(() => {
    const initialState = {
      comments: ['Comment 1', 'Comment 2'],
    };

    wrapped = mount(
      <Root initialState={initialState}>
        <CommentList />
      </Root>,
    );
  });

  afterEach(() => {
    wrapped.unmount();
  });

  it('shows <li /> per comment', () => {
    expect(wrapped.find('li').length).toEqual(2);
  });

  it('shows text of each comment', () => {
    expect(wrapped.render().text()).toContain('Comment 1');
    expect(wrapped.render().text()).toContain('Comment 2');
  });
});
