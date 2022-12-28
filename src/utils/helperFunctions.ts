import Number0 from '../components/Counter/Numbers/Number0'
import Number1 from '../components/Counter/Numbers/Number1'
import Number2 from '../components/Counter/Numbers/Number2'
import Number3 from '../components/Counter/Numbers/Number3'
import Number4 from '../components/Counter/Numbers/Number4'
import Number5 from '../components/Counter/Numbers/Number5'
import Number6 from '../components/Counter/Numbers/Number6'
import Number7 from '../components/Counter/Numbers/Number7'
import Number8 from '../components/Counter/Numbers/Number8'
import Number9 from '../components/Counter/Numbers/Number9'

export function getNumberIcon(value: number) {
  switch (value) {
    case 0:
      return Number0
    case 1:
      return Number1
    case 2:
      return Number2
    case 3:
      return Number3
    case 4:
      return Number4
    case 5:
      return Number5
    case 6:
      return Number6
    case 7:
      return Number7
    case 8:
      return Number8
    case 9:
      return Number9
    default:
      return Number0
  }
}
