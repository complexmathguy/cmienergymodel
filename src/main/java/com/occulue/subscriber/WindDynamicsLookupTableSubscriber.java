/*******************************************************************************
  Turnstone Biologics Confidential
  
  2018 Turnstone Biologics
  All Rights Reserved.
  
  This file is subject to the terms and conditions defined in
  file 'license.txt', which is part of this source code package.
   
  Contributors :
        Turnstone Biologics - General Release
 ******************************************************************************/
package com.occulue.subscriber;

import java.util.*;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.axonframework.queryhandling.QueryGateway;
import org.axonframework.queryhandling.SubscriptionQueryResult;
import org.axonframework.messaging.responsetypes.ResponseTypes;

import org.springframework.context.ApplicationContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.stereotype.Component;


import com.occulue.api.*;
import com.occulue.entity.*;
import com.occulue.exception.*;

/**
 * Subscriber for WindDynamicsLookupTable related events.  .
 * 
 * @author your_name_here
 *
 */
@Component("windDynamicsLookupTable-subscriber")
public class WindDynamicsLookupTableSubscriber extends BaseSubscriber {

	public WindDynamicsLookupTableSubscriber() {
		queryGateway = applicationContext.getBean(QueryGateway.class);
	}
	
    public SubscriptionQueryResult<List<WindDynamicsLookupTable>, WindDynamicsLookupTable> windDynamicsLookupTableSubscribe() {
        return queryGateway
                .subscriptionQuery(new FindAllWindDynamicsLookupTableQuery(), 
                		ResponseTypes.multipleInstancesOf(WindDynamicsLookupTable.class),
                		ResponseTypes.instanceOf(WindDynamicsLookupTable.class));
    }

    public SubscriptionQueryResult<WindDynamicsLookupTable, WindDynamicsLookupTable> windDynamicsLookupTableSubscribe(@DestinationVariable UUID windDynamicsLookupTableId) {
        return queryGateway
                .subscriptionQuery(new FindWindDynamicsLookupTableQuery(new LoadWindDynamicsLookupTableFilter(windDynamicsLookupTableId)), 
                		ResponseTypes.instanceOf(WindDynamicsLookupTable.class),
                		ResponseTypes.instanceOf(WindDynamicsLookupTable.class));
    }




    // -------------------------------------------------
    // attributes
    // -------------------------------------------------
	@Autowired
    private final QueryGateway queryGateway;
}

