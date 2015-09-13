module.exports = {
	connection: {
		port: 8080
	},
	server: {
		connections: {
			router: {
	      isCaseSensitive: false,
	      stripTrailingSlash: true
	    },
	    routes: {
	      validate: {
	        options: {
	          allowUnknown: true
	        }
	      },
	      timeout: {
	        server: 10000
	      }
	    },
	    state: {
	      ignoreErrors: true,
	      strictHeader: false
	    }
		}
	}
};