import React from 'react';
import { mount } from 'enzyme';

import CommentBox from 'components/CommentBox';
import Root from 'Root';

describe('<CommentBox />', () => {
  let wrapped;

  beforeEach(() => {
    wrapped = mount(
      <Root>
        <CommentBox />
      </Root>,
    );
  });

  afterEach(() => {
    wrapped.unmount();
  });

  it('has textarea and button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
  });

  describe('the textarea', () => {
    beforeEach(() => {
      wrapped
        .find('textarea') //find text area
        .simulate('change', { target: { value: 'new comment' } }); //simulate change

      // setState is async, force re-render to be sure it happened
      wrapped.update();
    });

    it('has textarea that user can type in', () => {
      expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    });

    it('should reset textarea when form is submitted', () => {
      wrapped.find('form').simulate('submit', {});
      wrapped.update();

      expect(wrapped.find('textarea').prop('value')).toEqual('');
    });
  });
});
