
interface FormSectionProps {
  label: string,
  value: string,
  setValue: (newValue: string) => void
}

export default function FormSection({ label, value, setValue }: FormSectionProps) {

  return <label>
    <div>{label}</div>
    <input type="text" onChange={e => setValue(e.target.value)} value={value}
      className="bg-zinc-700"
    />
  </label>

}
