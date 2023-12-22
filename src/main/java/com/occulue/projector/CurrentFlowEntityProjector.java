/*******************************************************************************
  Turnstone Biologics Confidential
  
  2018 Turnstone Biologics
  All Rights Reserved.
  
  This file is subject to the terms and conditions defined in
  file 'license.txt', which is part of this source code package.
   
  Contributors :
        Turnstone Biologics - General Release
 ******************************************************************************/
package com.occulue.projector;

import java.util.*;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;


import com.occulue.api.*;
import com.occulue.entity.*;
import com.occulue.exception.*;
import com.occulue.repository.*;

/**
 * Projector for CurrentFlow as outlined for the CQRS pattern.
 * 
 * Commands are handled by CurrentFlowAggregate
 * 
 * @author your_name_here
 *
 */
@Component("currentFlow-entity-projector")
public class CurrentFlowEntityProjector {
		
	// core constructor
	public CurrentFlowEntityProjector(CurrentFlowRepository repository ) {
        this.repository = repository;
    }	

	/*
	 * Insert a CurrentFlow
	 * 
     * @param	entity CurrentFlow
     */
    public CurrentFlow create( CurrentFlow entity) {
	    LOGGER.info("creating " + entity.toString() );
	   
    	// ------------------------------------------
    	// persist a new one
    	// ------------------------------------------ 
	    return repository.save(entity);
        
    }

	/*
	 * Update a CurrentFlow
	 * 
     * @param	entity CurrentFlow
     */
    public CurrentFlow update( CurrentFlow entity) {
	    LOGGER.info("updating " + entity.toString() );

	    // ------------------------------------------
    	// save with an existing instance
    	// ------------------------------------------ 
		return repository.save(entity);

    }
    
	/*
	 * Delete a CurrentFlow
	 * 
     * @param	id		UUID
     */
    public CurrentFlow delete( UUID id ) {
	    LOGGER.info("deleting " + id.toString() );

    	// ------------------------------------------
    	// locate the entity by the provided id
    	// ------------------------------------------
	    CurrentFlow entity = repository.findById(id).get();
	    
    	// ------------------------------------------
    	// delete what is discovered 
    	// ------------------------------------------
    	repository.delete( entity );
    	
    	return entity;
    }    




    /**
     * Method to retrieve the CurrentFlow via an FindCurrentFlowQuery
     * @return 	query	FindCurrentFlowQuery
     */
    @SuppressWarnings("unused")
    public CurrentFlow find( UUID id ) {
    	LOGGER.info("handling find using " + id.toString() );
    	try {
    		return repository.findById(id).get();
    	}
    	catch( IllegalArgumentException exc ) {
    		LOGGER.log( Level.WARNING, "Failed to find a CurrentFlow - {0}", exc.getMessage() );
    	}
    	return null;
    }
    
    /**
     * Method to retrieve a collection of all CurrentFlows
     *
     * @param	query	FindAllCurrentFlowQuery 
     * @return 	List<CurrentFlow> 
     */
    @SuppressWarnings("unused")
    public List<CurrentFlow> findAll( FindAllCurrentFlowQuery query ) {
    	LOGGER.info("handling findAll using " + query.toString() );
    	try {
    		return repository.findAll();
    	}
    	catch( IllegalArgumentException exc ) {
    		LOGGER.log( Level.WARNING, "Failed to find all CurrentFlow - {0}", exc.getMessage() );
    	}
    	return null;
    }

    //--------------------------------------------------
    // attributes
    // --------------------------------------------------
	@Autowired
    protected final CurrentFlowRepository repository;

    private static final Logger LOGGER 	= Logger.getLogger(CurrentFlowEntityProjector.class.getName());

}
