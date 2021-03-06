/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.dawn.Book', null, global);
goog.exportSymbol('proto.dawn.Media', null, global);
goog.exportSymbol('proto.dawn.Page', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dawn.Book = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dawn.Book.repeatedFields_, null);
};
goog.inherits(proto.dawn.Book, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dawn.Book.displayName = 'proto.dawn.Book';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dawn.Page = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dawn.Page, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dawn.Page.displayName = 'proto.dawn.Page';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dawn.Media = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dawn.Media, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dawn.Media.displayName = 'proto.dawn.Media';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dawn.Book.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dawn.Book.prototype.toObject = function(opt_includeInstance) {
  return proto.dawn.Book.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dawn.Book} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dawn.Book.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    title: jspb.Message.getFieldWithDefault(msg, 2, ""),
    cover: (f = msg.getCover()) && proto.dawn.Media.toObject(includeInstance, f),
    pageList: jspb.Message.toObjectList(msg.getPageList(),
    proto.dawn.Page.toObject, includeInstance),
    reader: jspb.Message.getFieldWithDefault(msg, 5, ""),
    amount: jspb.Message.getFieldWithDefault(msg, 6, 0),
    level: jspb.Message.getFieldWithDefault(msg, 7, 0),
    category: jspb.Message.getFieldWithDefault(msg, 8, ""),
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : [],
    created: (f = msg.getCreated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dawn.Book}
 */
proto.dawn.Book.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dawn.Book;
  return proto.dawn.Book.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dawn.Book} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dawn.Book}
 */
proto.dawn.Book.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 3:
      var value = new proto.dawn.Media;
      reader.readMessage(value,proto.dawn.Media.deserializeBinaryFromReader);
      msg.setCover(value);
      break;
    case 4:
      var value = new proto.dawn.Page;
      reader.readMessage(value,proto.dawn.Page.deserializeBinaryFromReader);
      msg.addPage(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setReader(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAmount(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLevel(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 9:
      var value = msg.getLabelsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "");
         });
      break;
    case 10:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreated(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dawn.Book.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dawn.Book.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dawn.Book} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dawn.Book.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCover();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.dawn.Media.serializeBinaryToWriter
    );
  }
  f = message.getPageList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.dawn.Page.serializeBinaryToWriter
    );
  }
  f = message.getReader();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getLevel();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getLabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(9, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getCreated();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


Object.defineProperty(proto.dawn.Book.prototype, "id", {
  set: function(value) {
    this.setId(value);
  },
  get: function() {
    return this.getId();
  },
});


/**
 * optional string id = 1;
 * @return {string}
 */
proto.dawn.Book.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.dawn.Book.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


Object.defineProperty(proto.dawn.Book.prototype, "title", {
  set: function(value) {
    this.setTitle(value);
  },
  get: function() {
    return this.getTitle();
  },
});


/**
 * optional string title = 2;
 * @return {string}
 */
proto.dawn.Book.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.dawn.Book.prototype.setTitle = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


Object.defineProperty(proto.dawn.Book.prototype, "cover", {
  set: function(value) {
    this.setCover(value);
  },
  get: function() {
    return this.getCover();
  },
});


/**
 * optional Media cover = 3;
 * @return {?proto.dawn.Media}
 */
proto.dawn.Book.prototype.getCover = function() {
  return /** @type{?proto.dawn.Media} */ (
    jspb.Message.getWrapperField(this, proto.dawn.Media, 3));
};


/** @param {?proto.dawn.Media|undefined} value */
proto.dawn.Book.prototype.setCover = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.dawn.Book.prototype.clearCover = function() {
  this.setCover(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dawn.Book.prototype.hasCover = function() {
  return jspb.Message.getField(this, 3) != null;
};


Object.defineProperty(proto.dawn.Book.prototype, "pageList", {
  set: function(value) {
    this.setPageList(value);
  },
  get: function() {
    return this.getPageList();
  },
});


/**
 * repeated Page page = 4;
 * @return {!Array<!proto.dawn.Page>}
 */
proto.dawn.Book.prototype.getPageList = function() {
  return /** @type{!Array<!proto.dawn.Page>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dawn.Page, 4));
};


/** @param {!Array<!proto.dawn.Page>} value */
proto.dawn.Book.prototype.setPageList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.dawn.Page=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dawn.Page}
 */
proto.dawn.Book.prototype.addPage = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.dawn.Page, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.dawn.Book.prototype.clearPageList = function() {
  this.setPageList([]);
};


Object.defineProperty(proto.dawn.Book.prototype, "reader", {
  set: function(value) {
    this.setReader(value);
  },
  get: function() {
    return this.getReader();
  },
});


/**
 * optional string reader = 5;
 * @return {string}
 */
proto.dawn.Book.prototype.getReader = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.dawn.Book.prototype.setReader = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


Object.defineProperty(proto.dawn.Book.prototype, "amount", {
  set: function(value) {
    this.setAmount(value);
  },
  get: function() {
    return this.getAmount();
  },
});


/**
 * optional int32 amount = 6;
 * @return {number}
 */
proto.dawn.Book.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.dawn.Book.prototype.setAmount = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


Object.defineProperty(proto.dawn.Book.prototype, "level", {
  set: function(value) {
    this.setLevel(value);
  },
  get: function() {
    return this.getLevel();
  },
});


/**
 * optional int32 level = 7;
 * @return {number}
 */
proto.dawn.Book.prototype.getLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.dawn.Book.prototype.setLevel = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
};


Object.defineProperty(proto.dawn.Book.prototype, "category", {
  set: function(value) {
    this.setCategory(value);
  },
  get: function() {
    return this.getCategory();
  },
});


/**
 * optional string category = 8;
 * @return {string}
 */
proto.dawn.Book.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.dawn.Book.prototype.setCategory = function(value) {
  jspb.Message.setProto3StringField(this, 8, value);
};


Object.defineProperty(proto.dawn.Book.prototype, "labelsMap", {
  set: function(value) {
    this.setLabelsMap(value);
  },
  get: function() {
    return this.getLabelsMap();
  },
});


/**
 * map<string, string> labels = 9;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.dawn.Book.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 9, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 */
proto.dawn.Book.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
};


Object.defineProperty(proto.dawn.Book.prototype, "created", {
  set: function(value) {
    this.setCreated(value);
  },
  get: function() {
    return this.getCreated();
  },
});


/**
 * optional google.protobuf.Timestamp created = 10;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.dawn.Book.prototype.getCreated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 10));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.dawn.Book.prototype.setCreated = function(value) {
  jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.dawn.Book.prototype.clearCreated = function() {
  this.setCreated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dawn.Book.prototype.hasCreated = function() {
  return jspb.Message.getField(this, 10) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dawn.Page.prototype.toObject = function(opt_includeInstance) {
  return proto.dawn.Page.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dawn.Page} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dawn.Page.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    picture: (f = msg.getPicture()) && proto.dawn.Media.toObject(includeInstance, f),
    sound: (f = msg.getSound()) && proto.dawn.Media.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dawn.Page}
 */
proto.dawn.Page.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dawn.Page;
  return proto.dawn.Page.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dawn.Page} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dawn.Page}
 */
proto.dawn.Page.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto.dawn.Media;
      reader.readMessage(value,proto.dawn.Media.deserializeBinaryFromReader);
      msg.setPicture(value);
      break;
    case 3:
      var value = new proto.dawn.Media;
      reader.readMessage(value,proto.dawn.Media.deserializeBinaryFromReader);
      msg.setSound(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dawn.Page.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dawn.Page.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dawn.Page} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dawn.Page.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPicture();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.dawn.Media.serializeBinaryToWriter
    );
  }
  f = message.getSound();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.dawn.Media.serializeBinaryToWriter
    );
  }
};


Object.defineProperty(proto.dawn.Page.prototype, "name", {
  set: function(value) {
    this.setName(value);
  },
  get: function() {
    return this.getName();
  },
});


/**
 * optional string name = 1;
 * @return {string}
 */
proto.dawn.Page.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.dawn.Page.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


Object.defineProperty(proto.dawn.Page.prototype, "picture", {
  set: function(value) {
    this.setPicture(value);
  },
  get: function() {
    return this.getPicture();
  },
});


/**
 * optional Media picture = 2;
 * @return {?proto.dawn.Media}
 */
proto.dawn.Page.prototype.getPicture = function() {
  return /** @type{?proto.dawn.Media} */ (
    jspb.Message.getWrapperField(this, proto.dawn.Media, 2));
};


/** @param {?proto.dawn.Media|undefined} value */
proto.dawn.Page.prototype.setPicture = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.dawn.Page.prototype.clearPicture = function() {
  this.setPicture(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dawn.Page.prototype.hasPicture = function() {
  return jspb.Message.getField(this, 2) != null;
};


Object.defineProperty(proto.dawn.Page.prototype, "sound", {
  set: function(value) {
    this.setSound(value);
  },
  get: function() {
    return this.getSound();
  },
});


/**
 * optional Media sound = 3;
 * @return {?proto.dawn.Media}
 */
proto.dawn.Page.prototype.getSound = function() {
  return /** @type{?proto.dawn.Media} */ (
    jspb.Message.getWrapperField(this, proto.dawn.Media, 3));
};


/** @param {?proto.dawn.Media|undefined} value */
proto.dawn.Page.prototype.setSound = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.dawn.Page.prototype.clearSound = function() {
  this.setSound(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dawn.Page.prototype.hasSound = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dawn.Media.prototype.toObject = function(opt_includeInstance) {
  return proto.dawn.Media.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dawn.Media} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dawn.Media.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dawn.Media}
 */
proto.dawn.Media.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dawn.Media;
  return proto.dawn.Media.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dawn.Media} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dawn.Media}
 */
proto.dawn.Media.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dawn.Media.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dawn.Media.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dawn.Media} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dawn.Media.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


Object.defineProperty(proto.dawn.Media.prototype, "url", {
  set: function(value) {
    this.setUrl(value);
  },
  get: function() {
    return this.getUrl();
  },
});


/**
 * optional string url = 1;
 * @return {string}
 */
proto.dawn.Media.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.dawn.Media.prototype.setUrl = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


goog.object.extend(exports, proto.dawn);
