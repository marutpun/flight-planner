export function valueToStatus(val) {
  switch (val) {
    case 1:
      return 'Departed';
    case 2:
      return 'Gate Closed';
    case 3:
      return 'Last Call';
    case 4:
      return 'Gate Closing';
    case 5:
      return 'Gate Open';
    default:
      return 'None';
  }
}
