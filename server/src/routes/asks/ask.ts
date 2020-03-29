import { Location, isValidLocation } from "./location"
import { start } from "repl";

const fs = require('fs');

export interface Ask {
  id : number,
  requester: string,
  item : string,
  open : boolean,
  email? : string,
  phone? : string,
  location : Location,
  instructions : string,
  timestamp : string,
}

export function getAllAsksFromStorage(): Ask[] {
  const rawData = fs.readFileSync('src/routes/asks/testData.json');
  const askList = JSON.parse(rawData);
  const cachedAskList = getMuteableAsksFromStorage();
  const combinedList = askList.concat(cachedAskList);
  return combinedList;
}

export function getMuteableAsksFromStorage(): Ask[] {
  let rawData = null;
  try {
    rawData = fs.readFileSync('src/routes/asks/data.json');
  } catch(e) {
    rawData = JSON.stringify([]);
    fs.writeFileSync('src/routes/asks/data.json', rawData);
  }
  const askList = JSON.parse(rawData);
  return askList;
}

export function upsertAsk(ask : Ask): Ask {
  const askList = getMuteableAsksFromStorage();
  const findFunction = isMatchingId.bind(this, ask.id);
  const index = askList.findIndex(findFunction);
  if (index >= 0) {
    askList[index] = ask;
  } else {
    ask.id = makeNewId(askList);
    askList.push(ask);
  }

  fs.writeFileSync('src/routes/asks/data.json',
      JSON.stringify(askList));

  return ask;
}

function isMatchingId(id: number, obj: any) {
  return id == obj.id;
}

function makeNewId(askList : Ask[]): number {
  let id = 10;
  if (askList.length > 0) {
    id = askList[askList.length - 1].id + 1;
  }
  return id;
}

export function deleteAsk(id : number): boolean {
  const askList = getMuteableAsksFromStorage();
  const findFunction = isMatchingId.bind(this, id);
  const index = askList.findIndex(findFunction);
  if (index < 0) {
    return false;
  }

  askList.splice(index, 1);
  fs.writeFileSync('src/routes/asks/data.json',
      JSON.stringify(askList));
  return true;
}

export function isValidAsk(obj : any): boolean {
  return obj.id !== undefined &&
      obj.requester !== undefined &&
      obj.item !== undefined &&
      obj.open !== undefined &&
      obj.email !== undefined &&
      obj.phone !== undefined &&
      obj.location !== undefined &&
      obj.instructions !== undefined &&
      obj.timestamp !== undefined &&
      isValidLocation(obj.location);
}
