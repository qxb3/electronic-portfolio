<script>
  import TypeWriter from 'svelte-typewriter'
</script>

<div class="profile">
  <img data-aos="fade-left" data-aos-delay="50" class="image" src="/me.png" alt="Me">
  <p data-aos="fade-right" data-aos-delay="200" class="name title">• Justin Karl C. Salimbagat</p>

  <div data-aos="fade-up" data-aos-delay="400" class="info">
    <TypeWriter mode="loop" interval={100}>
      <p>12 - ICT Student</p>
      <p>Melchora Aquino Highschool Student</p>
      <p>LRN: 136521100412</p>
    </TypeWriter>
  </div>
</div>

<style>
  .profile {
    text-align: center;
    padding-top: 16px;
  }

  .image {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
  }

  .name {
    margin-top: 1rem;
  }

  .info {
    --cursor-color: var(--green);
    --cursor-width: 0.2rem;

    margin-top: 0.7rem;
    overflow-y: hidden;
  }

  .info p {
    color: var(--green);
  }
</style>
