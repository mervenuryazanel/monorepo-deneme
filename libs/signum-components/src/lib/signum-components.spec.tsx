import { render } from '@testing-library/react';

import SignumComponents from './signum-components';

describe('SignumComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SignumComponents />);
    expect(baseElement).toBeTruthy();
  });
});
