import { Beta } from './beta';
import { Prod } from './prod';

let Config: any = null;
if (process.env.NODE_ENV === 'production') {
	Config = new Prod();
} else {
	Config = new Beta();
}
export default Config;
