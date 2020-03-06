import * as React from 'react';
import { BlockLoading } from 'zent';

const Tag: React.FC = () => {
  return <BlockLoading loading={true}>
    <div>ChildContent</div>
  </BlockLoading>
}

export default Tag;
