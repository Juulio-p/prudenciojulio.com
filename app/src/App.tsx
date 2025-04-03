import { Container, Grid, Text, Button, Paper, Title } from '@mantine/core';

import './App.css'

function App() {

  return (
    <>
       <Container size="xl">
      <header style={{ padding: '20px 0', textAlign: 'center' }}>
        <Title order={1}>Julio C Prudencio</Title>
        <Text color="dimmed">Junior AI Developer | Web Developer | Cybersecurity Enthusiast</Text>
        <Button variant="light" color="blue" size="lg" style={{ marginTop: '20px' }}>
          Contact Me
        </Button>
      </header>

      <section>
        <Title order={2} style={{ marginTop: '40px' }}>About Me</Title>
        <Text>
          I am a passionate developer with experience in JavaScript, Python, React, and AI. I have worked on a variety of projects, from carpooling applications to cybersecurity research.
        </Text>
      </section>

      <section>
        <Title order={2} style={{ marginTop: '40px' }}>Skills</Title>
        <Grid gutter="lg" style={{ marginTop: '20px' }}>
          <Grid.Col span={4}>
            <Paper  shadow="sm">
              <Text >JavaScript</Text>
              <Text color="dimmed">React, Node.js, Express</Text>
            </Paper>
          </Grid.Col>
          <Grid.Col span={4}>
            <Paper  shadow="sm">
              <Text>Python</Text>
              <Text color="dimmed">Flask, Django, Machine Learning</Text>
            </Paper>
          </Grid.Col>
          <Grid.Col span={4}>
            <Paper  shadow="sm">
              <Text >Web Development</Text>
              <Text color="dimmed">HTML, CSS, JavaScript, React</Text>
            </Paper>
          </Grid.Col>
        </Grid>
      </section>

    </Container>
    </>
  )
}

export default App
