import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { StorybookPageModule } from '../shared';
import { FooterComponent } from './footer.component';

export default {
  title: 'UI / FooterComponent',
  component: FooterComponent,
  decorators: [
    moduleMetadata({
      imports: [StorybookPageModule],
    }),
  ],
} as Meta<FooterComponent>;

const Template: Story<FooterComponent> = (args: FooterComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
