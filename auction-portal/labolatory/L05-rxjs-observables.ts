import { filter, map, Observable, of, tap } from 'rxjs';

// PROVIDER:
function getMyMoneyFromVault() {
  return of(300);
}

// happy path:
// Consumer 1:
getMyMoneyFromVault().subscribe((value) => {
  console.log(value);
});

// Consumer 2:
getMyMoneyFromVault().subscribe({
  next: (value: number) => {
    console.log(value);
  },
  error: (err) => {
    console.log(err.message);
  },
  complete: () => {
    console.log('Completed!');
  },
});

// Wariant z pełnym api:
// PROVIDER
function getMyMoneyFromVaultP(password: string) {
  // Pełne API === pełna odpowiedzialnosć
  return new Observable<number>((subscriber) => {
    if (password === 'RG1283687691S') {
      // resolve(150);
      subscriber.next(150);
      setTimeout(() => {
        subscriber.next(150);
        subscriber.complete();
        subscriber.next(600);
      }, 3000)
     
    } else {
      subscriber.error(new Error('WRONG PASSWORD'));
      subscriber.next(999);
    }
    
  });
}

// consumer 1:
const subscription = getMyMoneyFromVaultP('RG1283687691S').subscribe((value) => {
  console.log(value);
});
subscription.unsubscribe();

// consumer 2:
getMyMoneyFromVaultP('RG1283687691S')
  .pipe(
    tap((v) => {
      console.log(v);
    }),
    map((v) => v * 3),
    tap((v) => {
      console.log(v);
    }),
    filter(v => v > 400)
  )
  .subscribe({
    next: (value: number) => {
      console.log(value);
    },
    error: (err) => {
      console.log(err.message);
    },
    complete: () => {
      console.log('Completed!');
    },
  });

// consumer 3:
getMyMoneyFromVaultP('ewhuwuieyriu3871256').subscribe({
  next: (value: number) => {
    console.log(value);
  },
  error: (err) => {
    console.log(err.message);
  },
  complete: () => {
    console.log('Completed!');
  },
});
