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
 * Projector for TopologicalNode as outlined for the CQRS pattern.
 * 
 * Commands are handled by TopologicalNodeAggregate
 * 
 * @author your_name_here
 *
 */
@Component("topologicalNode-entity-projector")
public class TopologicalNodeEntityProjector {
		
	// core constructor
	public TopologicalNodeEntityProjector(TopologicalNodeRepository repository ) {
        this.repository = repository;
    }	

	/*
	 * Insert a TopologicalNode
	 * 
     * @param	entity TopologicalNode
     */
    public TopologicalNode create( TopologicalNode entity) {
	    LOGGER.info("creating " + entity.toString() );
	   
    	// ------------------------------------------
    	// persist a new one
    	// ------------------------------------------ 
	    return repository.save(entity);
        
    }

	/*
	 * Update a TopologicalNode
	 * 
     * @param	entity TopologicalNode
     */
    public TopologicalNode update( TopologicalNode entity) {
	    LOGGER.info("updating " + entity.toString() );

	    // ------------------------------------------
    	// save with an existing instance
    	// ------------------------------------------ 
		return repository.save(entity);

    }
    
	/*
	 * Delete a TopologicalNode
	 * 
     * @param	id		UUID
     */
    public TopologicalNode delete( UUID id ) {
	    LOGGER.info("deleting " + id.toString() );

    	// ------------------------------------------
    	// locate the entity by the provided id
    	// ------------------------------------------
	    TopologicalNode entity = repository.findById(id).get();
	    
    	// ------------------------------------------
    	// delete what is discovered 
    	// ------------------------------------------
    	repository.delete( entity );
    	
    	return entity;
    }    




    /**
     * Method to retrieve the TopologicalNode via an FindTopologicalNodeQuery
     * @return 	query	FindTopologicalNodeQuery
     */
    @SuppressWarnings("unused")
    public TopologicalNode find( UUID id ) {
    	LOGGER.info("handling find using " + id.toString() );
    	try {
    		return repository.findById(id).get();
    	}
    	catch( IllegalArgumentException exc ) {
    		LOGGER.log( Level.WARNING, "Failed to find a TopologicalNode - {0}", exc.getMessage() );
    	}
    	return null;
    }
    
    /**
     * Method to retrieve a collection of all TopologicalNodes
     *
     * @param	query	FindAllTopologicalNodeQuery 
     * @return 	List<TopologicalNode> 
     */
    @SuppressWarnings("unused")
    public List<TopologicalNode> findAll( FindAllTopologicalNodeQuery query ) {
    	LOGGER.info("handling findAll using " + query.toString() );
    	try {
    		return repository.findAll();
    	}
    	catch( IllegalArgumentException exc ) {
    		LOGGER.log( Level.WARNING, "Failed to find all TopologicalNode - {0}", exc.getMessage() );
    	}
    	return null;
    }

    //--------------------------------------------------
    // attributes
    // --------------------------------------------------
	@Autowired
    protected final TopologicalNodeRepository repository;

    private static final Logger LOGGER 	= Logger.getLogger(TopologicalNodeEntityProjector.class.getName());

}
