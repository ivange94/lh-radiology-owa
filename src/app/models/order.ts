import {Concept} from "./concept";
import {Patient} from "./patient";
import {User} from "./user";
export class Order {

  uuid: string;
  accessionNumber: number;
  dateActivated: Date;
  urgency: string;
  scheduledDate: Date;
  display: string;
  concept: Concept;
  patient: Patient;
  orderer: User;
  orderReason: Concept;
  orderReasonNonCoded: string;
  dateStopped: Date;
  instructions: string;
}
