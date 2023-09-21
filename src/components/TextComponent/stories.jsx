import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem, ipsum dolor sit amet consectetur adipisicing
      elit. Nam, quam ratione modi impedit quia aut
      rem cumque illo repellat possimus eius facilis
      quibusdam dignissimos maxime deserunt distinctio
      dolorem beatae itaque!`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
