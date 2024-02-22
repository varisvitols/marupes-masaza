import Image from "next/image";
import TreatmentsItem from "./treatments-item";
import styles from "./page.module.css";
import { promises as fs } from 'fs';

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/app/data.json', 'utf8');
  const data = JSON.parse(file);

  const treatments = data.treatments.map((item) => (
<TreatmentsItem itemData={item} />
  ))

  return (
    <main className="treatments">
      {treatments}
    </main>
  );
}
