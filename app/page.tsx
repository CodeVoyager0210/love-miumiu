import Image from "next/image"
import { Nav } from "@/components/nav"
import { Reveal } from "@/components/reveal"


const filmography = [
  { year: "2020", title: "一秒钟", role: "女主角 · 刘闺女", director: "张艺谋" },
  { year: "2020", title: "送你一朵小红花", role: "女主角 · 马小远", director: "韩延" },
  { year: "2021", title: "悬崖之上", role: "女主角 · 小兰", director: "张艺谋" },
  { year: "2022", title: "念念相忘", role: "女主角 · 许念念", director: "刘雨霖" },
  { year: "2023", title: "脱轨", role: "女主角 · 江晓媛", director: "沈阳" },
  { year: "2023", title: "龙马精神", role: "女主角 · 小宝", director: "杨子" },
  { year: "2025", title: "想飞的女孩", role: "女主角 · 田恬", director: "文晏" },
  { year: "2025", title: "陷入我们的热恋", role: "女主角 · 徐栀", director: "柳广辉" },
  { year: "2026", title: "消失的人", role: "女主角 · 林雨彤", director: "程伟豪" },
];

const press = [
  "VOGUE CHINA",
  "HARPER'S BAZAAR",
  "ELLE",
  "VANITY FAIR",
  "T MAGAZINE",
  "NOWNESS",
  "CANNES 2025",
  "BERLINALE",
]

export default function Page() {
  return (
    <main className="relative bg-background text-foreground overflow-x-hidden">
      <Nav />

      {/* ============== HERO ============== */}
      <section id="home" className="relative h-[100svh] w-full overflow-hidden">
        <div className="absolute inset-0 animate-slow-zoom">
          <Image
            src="/images/cun2.jpg"
            alt="刘浩存 肖像"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* 渐变叠层营造电影感 */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/20 via-transparent to-foreground/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/30 via-transparent to-transparent" />

        {/* 左下角姓名 */}
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="mx-auto w-full max-w-[1600px] px-6 md:px-12 pb-20 md:pb-28">
            <div className="animate-fade-in-up">
              <p className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-background/70 mb-6">
                Actress · Since 2019
              </p>
              <h1 className="font-serif font-light text-background text-[14vw] md:text-[9vw] leading-[0.9] tracking-tight text-balance">
                刘浩存
              </h1>
              <p className="font-serif italic text-background/80 text-xl md:text-2xl mt-4 tracking-wide">
                Liu Haocun
              </p>
            </div>
          </div>
        </div>

        {/* 右上角引言 */}
        <div className="hidden md:block absolute top-28 right-12 max-w-xs animate-fade-in" style={{ animationDelay: "600ms" }}>
          <div className="h-px w-12 bg-background/60 mb-5" />
          <p className="font-serif italic text-background/90 text-lg leading-relaxed text-pretty">
            &ldquo;我觉得每个人，都有自己的一秒钟。&rdquo;
          </p>
        </div>

        {/* 底部滚动提示 */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-fade-in" style={{ animationDelay: "1200ms" }}>
          <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-background/70">Scroll</span>
          <div className="h-12 w-px bg-background/50 animate-pulse" />
        </div>
      </section>

      {/* ============== ABOUT ============== */}
      <section id="about" className="relative py-28 md:py-40">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="grid grid-cols-12 gap-6 md:gap-12 items-start">
            {/* 左侧图片 */}
            <Reveal className="col-span-12 md:col-span-5 md:col-start-1">
              <figure className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/cun1.jpg"
                  alt="刘浩存 自然肖像"
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
              </figure>
              <figcaption className="mt-4 font-sans text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
                Shot by Leslie Kee · Shanghai, 2025
              </figcaption>
            </Reveal>

            {/* 右侧文字，非对称偏下 */}
            <div className="col-span-12 md:col-span-6 md:col-start-7 md:pt-32">
              <Reveal>
                <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-8">
                  About — 01
                </p>
              </Reveal>

              <Reveal delay={120}>
                <h2 className="font-serif font-light text-5xl md:text-6xl leading-[1.05] tracking-tight text-balance">
                  在光与静默之间，
                  <br />
                  <em className="italic text-muted-foreground">寻找一个角色的呼吸。</em>
                </h2>
              </Reveal>

              <Reveal delay={240}>
                <div className="mt-10 space-y-6 font-serif text-lg md:text-xl leading-relaxed text-foreground/80 text-pretty max-w-xl">
                  <p>
                    2000 年生于吉林通化，毕业于北京舞蹈学院。镜头前的她带着一种天然的灵动，在细腻的表演中倾泻所有。
                  </p>
                  <p>
                    她的表演被形容为‘清泉般透明’，有一种未经雕琢的灵气，在银幕上留下了过目不忘的瞬间。&rdquo;。
                  </p>
                </div>
              </Reveal>

              <Reveal delay={360}>
                <dl className="mt-12 grid grid-cols-2 gap-8 border-t border-border pt-8 max-w-xl">
                  <div>
                    <dt className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2">出生</dt>
                    <dd className="font-serif text-xl">2000 · 通化</dd>
                  </div>
                  <div>
                    <dt className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2">身高</dt>
                    <dd className="font-serif text-xl">165 cm</dd>
                  </div>
                  <div>
                    <dt className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2">语言</dt>
                    <dd className="font-serif text-xl">中文 · English</dd>
                  </div>
                  <div>
                    <dt className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2">经纪</dt>
                    <dd className="font-serif text-xl">CAA China</dd>
                  </div>
                </dl>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============== WORKS / 作品年表 ============== */}
      <section id="works" className="relative bg-foreground text-background py-28 md:py-40">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <Reveal>
            <div className="flex items-baseline justify-between mb-16 md:mb-24">
              <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-background/60">
                Selected Works — 02
              </p>
              <p className="font-serif italic text-background/60 text-sm md:text-base">
                2020 — 2026
              </p>
            </div>
          </Reveal>

          <ul className="divide-y divide-background/15">
            {filmography.map((film, i) => (
              <Reveal key={film.title} as="li" delay={i * 80}>
                <a
                  href="#"
                  className="group grid grid-cols-12 gap-4 py-8 md:py-10 items-baseline transition-opacity hover:opacity-100"
                >
                  <span className="col-span-2 md:col-span-1 font-sans text-xs tracking-[0.2em] text-background/50 group-hover:text-background transition-colors">
                    {film.year}
                  </span>
                  <h3 className="col-span-10 md:col-span-5 font-serif text-3xl md:text-5xl font-light tracking-tight text-background group-hover:italic transition-all">
                    {film.title}
                  </h3>
                  <span className="col-span-6 md:col-span-3 font-sans text-xs md:text-sm tracking-wider text-background/70">
                    {film.role}
                  </span>
                  <span className="col-span-6 md:col-span-3 font-serif italic text-right text-background/60">
                    dir. {film.director}
                  </span>
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ============== GALLERY 非对称图集 ============== */}
      <section id="gallery" className="relative py-28 md:py-40">
        <div className="mx-auto max-w-[1500px] px-6 md:px-12">
          <Reveal>
            <div className="mb-20 md:mb-28 max-w-2xl">
              <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-6">
                Gallery — 03
              </p>
              <h2 className="font-serif font-light text-5xl md:text-7xl leading-[1.05] tracking-tight text-balance">
                风过光落
                <em className="italic text-muted-foreground"> 未染尘</em>
              </h2>
            </div>
          </Reveal>

          {/* 非对称网格 */}
          <div className="grid grid-cols-12 gap-4 md:gap-8">
            {/* 第一张 — 左小 */}
            <Reveal className="col-span-7 md:col-span-5 md:col-start-1">
              <figure className="relative aspect-[3/4] overflow-hidden group">
                <Image
                  src="/images/cun11-1.jpg"
                  alt="侧颜肖像"
                  fill
                  sizes="(min-width: 768px) 40vw, 60vw"
                  className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
              </figure>
              <figcaption className="mt-3 font-sans text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
                01 / Silence — 2025
              </figcaption>
            </Reveal>

            {/* 第二张 — 右上，偏移 */}
            <Reveal className="col-span-12 md:col-span-5 md:col-start-8 md:mt-32" delay={120}>
              <figure className="relative aspect-[4/5] overflow-hidden group">
                <Image
                  src="/images/cun10.jpg"
                  alt="窗前剪影"
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
              </figure>
              <figcaption className="mt-3 font-sans text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
                02 / Morning Light — Berlin
              </figcaption>
            </Reveal>

            {/* 第三张 — 宽幅居中偏左 */}
            <Reveal className="col-span-12 md:col-span-8 md:col-start-3 mt-8 md:mt-24" delay={80}>
              <figure className="relative aspect-[16/10] overflow-hidden group">
                <Image
                  src="/images/cun8.jpg"
                  alt="画廊空间"
                  fill
                  sizes="(min-width: 768px) 66vw, 100vw"
                  className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
              </figure>
              <figcaption className="mt-3 font-sans text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
                03 / Empty Gallery — Kyoto
              </figcaption>
            </Reveal>

            {/* 第四张 — 左下小图 */}
            <Reveal className="col-span-7 md:col-span-4 md:col-start-1 mt-8 md:mt-16" delay={160}>
              <figure className="relative aspect-[3/4] overflow-hidden group">
                <Image
                  src="/images/cun12.jpg"
                  alt="近距特写"
                  fill
                  sizes="(min-width: 768px) 33vw, 60vw"
                  className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
              </figure>
              <figcaption className="mt-3 font-sans text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
                04 / Intimate — Vogue China
              </figcaption>
            </Reveal>

            {/* 第五张 — 右下方形 */}
            <Reveal className="col-span-12 md:col-span-5 md:col-start-7 mt-8 md:mt-40" delay={240}>
              <figure className="relative aspect-square overflow-hidden group">
                <Image
                  src="/images/cun14.jpg"
                  alt="工作室肖像"
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
              </figure>
              <figcaption className="mt-3 font-sans text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
                05 / The Script — Studio, 2024
              </figcaption>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============== PRESS 跑马灯 ============== */}
      <section className="border-y border-border py-10 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...press, ...press].map((p, i) => (
            <span
              key={i}
              className="font-serif italic text-2xl md:text-4xl text-muted-foreground mx-8 md:mx-14 tracking-wide"
            >
              {p} <span className="mx-4 md:mx-8 not-italic text-foreground/30">◦</span>
            </span>
          ))}
        </div>
      </section>

      {/* ============== CONTACT ============== */}
      <section id="contact" className="relative py-28 md:py-40">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="grid grid-cols-12 gap-8 md:gap-12">
            <Reveal className="col-span-12 md:col-span-7">
              <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-8">
                Contact — 04
              </p>
              <h2 className="font-serif font-light text-5xl md:text-8xl leading-[0.95] tracking-tight text-balance">
                若有合适的
                <br />
                <em className="italic">故事</em>，
                <br />
                请与我 <span className="underline decoration-1 underline-offset-8">相遇</span>。
              </h2>
            </Reveal>

            <div className="col-span-12 md:col-span-4 md:col-start-9 md:pt-8 space-y-10">
              <Reveal delay={120}>
                <div>
                  <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
                    经纪合作
                  </p>
                  <a href="mailto:agency@liuhaocun.com" className="font-serif text-2xl md:text-3xl hover:italic transition-all">
                    agency@liuhaocun.com
                  </a>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div>
                  <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
                    品牌与活动
                  </p>
                  <a href="mailto:press@liuhaocun.com" className="font-serif text-2xl md:text-3xl hover:italic transition-all">
                    press@liuhaocun.com
                  </a>
                </div>
              </Reveal>

              <Reveal delay={280}>
                <div>
                  <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
                    社交
                  </p>
                  <ul className="font-serif text-xl space-y-2">
                    <li><a href="#" className="hover:italic transition-all">Instagram / @liuhaocun_</a></li>
                    <li><a href="#" className="hover:italic transition-all">微博 / 刘浩存_official</a></li>
                    <li><a href="#" className="hover:italic transition-all">小红书 / 刘浩存</a></li>
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============== FOOTER ============== */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="font-serif italic text-sm text-muted-foreground">
            © MMXXVI · Liu Haocun · All rights reserved.
          </p>
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
            Designed in silence · Shanghai / Paris
          </p>
        </div>
      </footer>
    </main>
  )
}
