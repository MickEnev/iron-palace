type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="mx-auto max-w-(--container-width) px-6">{children}</div>
  );
};

export default Container;
