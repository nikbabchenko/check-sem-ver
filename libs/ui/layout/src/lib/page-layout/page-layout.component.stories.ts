import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { StorybookPageModule } from '../shared';
import { PageLayoutComponent } from './page-layout.component';

export default {
  title: 'UI / PageLayoutComponent',
  component: PageLayoutComponent,
  decorators: [
    moduleMetadata({
      declarations: [FooterComponent, HeaderComponent],
      imports: [StorybookPageModule],
    }),
  ],
} as Meta<PageLayoutComponent>;

const Template: Story<PageLayoutComponent> = (args: PageLayoutComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
