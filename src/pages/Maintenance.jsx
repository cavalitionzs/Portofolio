import maintenance from '../assets/images/Under-Maintenance.jpg'

const Maintenance = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <img 
        src={maintenance} 
        alt="Maintenance" 
        className="max-w-full max-h-full" 
      />
    </div>
  );
}

export default Maintenance;