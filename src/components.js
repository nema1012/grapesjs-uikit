import Card, {CardBlock, CardBlockHorizonzal} from './components/Card';
import Navigation, {TabBlock} from './components/Navigation'
import ImageComponents, {Image, BackgroundImage, ImageSlider, UcCover, ResponsiveHeight, ParallaxHeadline } from './components/Image'

import Default, {Article, Column, ColumnDivider, ColumnDividerWithSpan, Container} from './components/Default';
import AccordionElements, {Accordion} from './components/Accordion';
import {Section} from './components/Section';

export default (editor, opts = {}) => {
  const c = opts;
  const domc = editor.DomComponents;
  const { blocks } = c;
  const bm = editor.BlockManager;
  const cats = c.blockCategories;

  Default(domc);

  CardBlock(bm, c);
  CardBlockHorizonzal(bm, c);
  Card(domc, editor);
  TabBlock(bm, c);
  Navigation(domc, editor);
  ImageComponents(domc, editor);
  Image(bm, c);
  BackgroundImage(bm, c);
  ImageSlider(bm, c);
  UcCover(bm, c);
  ResponsiveHeight(bm, c);
  ParallaxHeadline(bm, c);
  AccordionElements(domc, editor);
  Accordion(bm, c);
  Article(bm, c);
  Column(bm, c);
  ColumnDivider(bm, c);
  ColumnDividerWithSpan(bm, c);
  Container(bm, c);
  Section(bm, c);
};
