import * as jspb from "google-protobuf"

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Book extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getCover(): string;
  setCover(value: string): void;

  getPage(): number;
  setPage(value: number): void;

  getReader(): string;
  setReader(value: string): void;

  getCount(): string;
  setCount(value: string): void;

  getCategory(): string;
  setCategory(value: string): void;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;

  getCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreated(): boolean;
  clearCreated(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Book.AsObject;
  static toObject(includeInstance: boolean, msg: Book): Book.AsObject;
  static serializeBinaryToWriter(message: Book, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Book;
  static deserializeBinaryFromReader(message: Book, reader: jspb.BinaryReader): Book;
}

export namespace Book {
  export type AsObject = {
    id: string,
    title: string,
    cover: string,
    page: number,
    reader: string,
    count: string,
    category: string,
    labelsMap: Array<[string, string]>,
    created?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

