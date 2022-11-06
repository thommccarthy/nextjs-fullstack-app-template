import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import SidebarLayout from '../components/layouts/sidebar/SidebarLayout';
import { NextPageWithLayout } from './page';

const About: NextPageWithLayout = () => {
  return (
    <section className="bg-black">
      <h1 className="text-white">About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatum, quae, quod, voluptas quibusdam voluptates quia voluptatibus
        quidem quos natus quas. Quisquam, quae. Quisquam, quae. Quisquam, quae.
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatum, quae, quod, voluptas quibusdam voluptates quia voluptatibus
        quidem quos natus quas. Quisquam, quae. Quisquam, quae. Quisquam, quae.
      </p>
    </section>
  );
};

export default About;

About.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  );
};
