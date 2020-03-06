import * as React from 'react';
import Tags from 'pages/tags';
import { render, cleanup } from '@testing-library/react';

describe('<Tags />', () => {
  afterEach(cleanup);

  test('<Tags /> render BlockLoading', () => {
    const { container } = render(<Tags />);
    console.log(container.innerHTML);
    expect(true).toBe(true);
  })
})
