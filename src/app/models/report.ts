import {Order} from "./order";
import {User} from "./user";

export class Report {

  uuid: string;
  radiologyOrder: Order;
  date: Date;
  principalResultsInterpreter: User;
  status: string;
  body: string;
  display: string;
  void: boolean;
}
