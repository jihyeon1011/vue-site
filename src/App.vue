<script setup>

</script>

<template>
  <P>경로: {{ $route.fullPath }}</P>
  <nav>
    <ul>
      <RouterLink to="/">
        <li>Go to Home</li>
      </RouterLink>

      <RouterLink to="/about">
        <li>Go to About</li>
      </RouterLink>
      <RouterLink to="/study">
        <li>Go to StudyView</li>
      </RouterLink>
      <RouterLink to="/wd">
        <li>Go to Ex_WebDesign</li>
      </RouterLink>
    </ul>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
li {
  list-style: none;
  font-weight: bolder;
  display: inline-block;
  padding: 20px;
  margin: 10px;
  border: 1px solid gray;
  border-radius: 6px;
  box-shadow: 5px 3px 3px 3px #ccc;
}

li:hover {
  color: blue;
  background-color: skyblue;
}
</style>
