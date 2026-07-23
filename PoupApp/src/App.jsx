import styles from './Components/App.module.css';

import { Container } from './Components/Container/Container';
import { Asaide } from './Components/Asaide/Asaide';
import { SearchInput } from './Components/SearchInput/SearchInput';
import { Main } from './Components/Main/Main';
import { Typography } from './Components/Typography/Typography';
import { DailyBudget } from './Components/DailyBudget/DailyBudget';
import { SavingsStatus } from './Components/SavingsStatus/SavingsStatus';
import { Transactions } from './Components/Transactions/Transactions';
import { Accounts } from './Components/Accounts/Accounts';

import Card from './Components/Card';

function App() {
  return (
    <Container>
      <Asaide />
      <Main>
        <div className={styles.container}>
          <SearchInput />
          <div>
            <Typography variant='h1'>Olá, Gabriel!</Typography>
            <Typography variant='body'>
              Veja como estão suas finanças hoje.
            </Typography>
          </div>
          <section className={styles.grid}>
            <Card>
              <Card.Header>Orçamento diário disponível</Card.Header>
              <Card.Body>
                <DailyBudget value={200} />
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>Progresso da meta financeira</Card.Header>
              <Card.Body>
                <SavingsStatus percent={60} />
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>Movimentação Financeira</Card.Header>
              <Card.Body>
                <Transactions />
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>Minhas contas</Card.Header>
              <Card.Body>
                <Accounts />
              </Card.Body>
            </Card>
          </section>
        </div>
      </Main>
    </Container>
  );
}

export default App;
