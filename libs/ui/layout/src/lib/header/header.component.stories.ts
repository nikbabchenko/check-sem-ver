import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { StorybookPageModule } from '../shared';
import { HeaderComponent } from './header.component';

export default {
  title: 'UI / HeaderComponent',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [StorybookPageModule],
    }),
  ],
} as Meta<HeaderComponent>;

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
