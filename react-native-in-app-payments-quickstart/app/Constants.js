/*
 Copyright 2019 Square Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
const SQUARE_APP_ID = 'REPLACE_ME';
const SQUARE_LOCATION_ID = 'REPLACE_ME';
// Make sure to remove trailing `/` since the CHARGE_SERVER_URL puts it
const CHARGE_SERVER_HOST = 'REPLACE_ME';
const CHARGE_SERVER_URL = `${CHARGE_SERVER_HOST}/chargeForCookie`;
const GOOGLE_PAY_LOCATION_ID = 'REPLACE_ME';
const APPLE_PAY_MERCHANT_ID = 'REPLACE_ME';

module.exports = {
  SQUARE_APP_ID,
  SQUARE_LOCATION_ID,
  CHARGE_SERVER_HOST,
  CHARGE_SERVER_URL,
  GOOGLE_PAY_LOCATION_ID,
  APPLE_PAY_MERCHANT_ID,
};
