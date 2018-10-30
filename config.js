/*
   Copyright 2016, Google, Inc.
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

module.exports = {
    projectId: 'javaprojectraghu',
    keyFilename: './key.json',
    bucketName: 'javaprojectraghu.appspot.com',
    cookieSecret: '[cookie signing key]',
    oauth2: {
        clientId: '1031230414945-rhgsv748eb0m11md1m3gem0l5ca3bn3n.apps.googleusercontent.com',
        clientSecret: 'Wcbs1j9UhQ_BwAT6hIj3G773',
        redirectUrl: process.env.REDIRECT_URL || '	https://8080-dot-4711113-dot-devshell.appspot.com/oauth2callback'
    }
};
