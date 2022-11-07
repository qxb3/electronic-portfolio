<script>
  import BiggerPicture from 'bigger-picture'

  const bp = BiggerPicture({
    target: document.body
  })

  const activities = [
    {
      id: 'a',
      title: 'Rotoscope',
      imgs: [
        {
          src: '/activities/rotoscope.png',
          width: '720',
          height: '1344'
        }
      ]
    },
    {
      id: 'b',
      title: 'Character Design: Whole Body Turn Around (Digital)',
      imgs: [
        { src: '/activities/character_design_whole_body_turn_around_digital_1.png' },
        { src: '/activities/character_design_whole_body_turn_around_digital_2.png' }
      ]
    },
    {
      id: 'c',
      title: 'Character Design: Whole Body Turn Around (Gif)',
      imgs: [
        { src: '/activities/character_design_whole_body_turn_around_gif_1.gif' },
        { src: '/activities/character_design_whole_body_turn_around_gif_2.gif' }
      ]
    },
    {
      id: 'd',
      title: 'Character Design: Mouth Chart (Digital)',
      imgs: [
        { src: '/activities/character_design_mouth_chart_digital.png' }
      ]
    },
    {
      id: 'e',
      title: 'Character Design: Head Turn (Digital)',
      imgs: [
        { src: '/activities/character_design_head_turn_digital.png' }
      ]
    }
  ]

  /**
   * @param id {string}
   */
  function openImage(id) {
    bp.open({
      items: document.querySelectorAll(`#${id} a`)
    })
  }
</script>

<div data-aos="fade-up" data-aos-delay="600" data-aos-once="true" class="activities-container">
  <h1 class="title">Activites:</h1>

  <div class="activities">
    {#each activities as activity}
      <a
        id={activity.id}
        class="activity"
        on:click|preventDefault={() => openImage(activity.id)}
        href={activity.imgs[0].src}>

        {#each activity.imgs as img}
          <a
            data-caption={activity.title}
            data-img={img.src}
            data-width={img.width || '1920'}
            data-height={img.height || '1080'}
            data-thumb={img.src}
            href={img.src}>
            <div style="display: none;"></div>
          </a>
        {/each}

        <img src="{activity.imgs[0].src}" alt="Activity">
      </a>
    {/each}
  </div>
</div>

<style>
  .activities-container {
    margin-top: 4.5rem;
  }

  .title {
    margin-bottom: 0.3rem;
  }

  .activities {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 6px;
    background-color: var(--bg_h);
    padding: 0.7rem;
  }

  .activity {
    display: block;
    background-color: var(--bg_s);
    border: solid var(--fg) 0.5px;
    height: 8rem;
  }

  .activity img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
