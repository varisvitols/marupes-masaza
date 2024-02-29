import Image from 'next/image'
import TreatmentsItem from './treatments-item'
import styles from './about.module.css'
import { promises as fs } from 'fs'

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/app/data.json', 'utf8')
  const data = JSON.parse(file)
  // console.log(data)

  return (
    <main className={styles.about}>
      <div className={styles.aboutItem}>
        <p>
          <i>
            "Esmu praktizējusies taizemiešu masāžas salonā. Ieguvu sertifikātu
            par sporta, klasisko un taizemiešu masāžu. Varu sarunāties angļu,
            vācu, spāņu vai latviešu valodā."
          </i>
        </p>
        <p>
          <i>
            "Es pielietoju austrumu masāžas tehniku. Varu izpildīt Lomi-lomi jeb
            havajiešu, tradicionālo karalisko Taizemes masāžu, Tibetas muguras
            masāžu, kā arī klasisko un sporta masāžu. Sākot no galvas/sejas,
            beidzot ar pēdām. Tu saņemsi unikālu procedūru un lielisku
            relaksāciju."
          </i>
        </p>
        <p>
          <i>
            "Esmu apguvusi caur- unikālu kulturālu apmaiņu- Taizemes masāžu
            visam ķermenim. Pārzinu meridiānus, punktus un līnijas uz ķermeņa,
            ko aktivizēt, lai Jūs iegūtu vēlamo rezultātu. Manas masāžas ir
            ideāli piemērotas sportistiem un citiem aktīviem cilvēkiem.
            Visvairāk iesaku tradicionālo Taizemes masāžu, kur pielietoju
            aktīvākas kustības un tev ir iespēja izbaudīt pasīvo jogu. Viens
            pētījums parādīja, ka deviņas tradicionālās taizemiešu masāžas
            sesijas 3 nedēļu laikā var mazināt sāpīgas galvassāpes."
          </i>
        </p>
      </div>

      <div className={styles.aboutItem}>
        <p>
          <i>
            "I have practiced in a Thai massage salon. I Obtained a Certificate
            for Classical and Thai massage. I can communicate in English,
            German, Spanish or Latvian."
          </i>
        </p>
        <p>
          <i>
            "I use the Oriental massage technique. I can perform Lomi-lomi or
            Hawaiian, traditional royal Thai massage, Tibetan back massage, as
            well as classical and sports massage. Starting from the head/face,
            all the way to the feet. You will receive a unique treatment and
            amazing relaxation."
          </i>
        </p>

        <p>
          <i>
            "Through a unique cultural exchange, I have learned Thai massage for
            the whole body. I know the meridians, points and lines on the body
            that must be activated to achieve the result you need. My massages
            are perfectly suitable for athletes and other active people.
            Usually, recommended procedure for most people is the Traditional
            Thai massage. A study shows that nine sessions of traditional Thai
            massage in a 3-week period can reduce painful headaches. If this is
            what you need, then you are in right place."
          </i>
        </p>
      </div>
    </main>
  )
}
