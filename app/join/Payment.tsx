type ProfileProps = {
  onBack: () => void;
};

const Payment = ({ onBack }: ProfileProps) => {
  return (
    <div>
      <button type="button" onClick={onBack}>
        Back
      </button>
      <h1>Gib me your mone</h1>
    </div>
  );
};

export default Payment;
