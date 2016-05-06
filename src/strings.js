/**
 * Copyright (c) 2014 Baidu.com, Inc. All Rights Reserved
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 *
 * @file strings.js
 * @author leeight
 */

let kEscapedMap = {
    '!': '%21',
    '\'': '%27',
    '(': '%28',
    ')': '%29',
    '*': '%2A'
};

let normalize = (string, encodingSlash) => {
    let result = encodeURIComponent(string).replace(/[!'\(\)\*]/g,
        $1 => kEscapedMap[$1]);

    if (encodingSlash === false) {
        result = result.replace(/%2F/gi, '/');
    }

    return result;
};

let trim = string => (string || '').replace(/^\s+|\s+$/g, '');

export default {
    trim,
    normalize
};

