import * as React from 'react';
import { BlockLoading } from 'zent';
import { Announcement, BlankLink, GoodsSelector } from '@youzan/react-components';
const { SelectedGoods } = GoodsSelector;

const Tag: React.FC = () => {
  return <BlockLoading loading={true}>
    <Announcement url="https://www.youzan.com/v4/scrm/api/announcement/apoll" name="tag-list" />
    <div>ChildContent</div>
    <SelectedGoods />
    <BlankLink href="https://www.youzan.com" />
  </BlockLoading>
}

export default Tag;
