
const ReadOnlyField = ({ label, value }: {label: string, value: string}) => (
  <div>
    <label className="text-gray-600 font-semibold">{label}:</label>
    <input
      type="text"
      value={value}
      readOnly
      className="input bg-gray-100 rounded border border-gray-300 w-full px-4 py-2"
    />
  </div>
);

export default ReadOnlyField;