import { genInjectID, IEventManager, InjectIDType } from '@/core';
import { ICodeGen } from './code-gen';

// 对外报漏api
export interface IApi {
  eventManger: IEventManager;
  codeGen: ICodeGen;
  init(): Promise<void>;
  getService<T extends object>(id: InjectIDType<T>): T | null;
  dispose(): Promise<void>;
}

export const iapiID = genInjectID<IApi>();

export default iapiID;